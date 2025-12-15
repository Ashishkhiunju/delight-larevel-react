<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = Item::latest()->get();
        return Inertia::render('Welcome', [
            'items' => $items,
            'canLogin' => \Illuminate\Support\Facades\Route::has('login'),
            'canRegister' => \Illuminate\Support\Facades\Route::has('register'),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'size' => 'required|string',
            'color' => 'required|string',
            'image' => 'nullable|image|max:2048',
        ]);

        $path = null;
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('items', 'uploads');
        }

        Item::create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'size' => $request->size,
            'color' => $request->color,
            'image_path' => $path,
        ]);

        return redirect()->back();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Item $item)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'size' => 'required|string',
            'color' => 'required|string',
            'image' => 'nullable|image|max:2048',
        ]);

        $path = $item->image_path;
        if ($request->hasFile('image')) {
            if ($path && Storage::disk('uploads')->exists($path)) {
                Storage::disk('uploads')->delete($path);
            }
            $path = $request->file('image')->store('items', 'uploads');
        }

        $item->update([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'size' => $request->size,
            'color' => $request->color,
            'image_path' => $path,
        ]);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Item $item)
    {
        if ($item->image_path && Storage::disk('uploads')->exists($item->image_path)) {
            Storage::disk('uploads')->delete($item->image_path);
        }
        $item->delete();
        return redirect()->back();
    }
}
