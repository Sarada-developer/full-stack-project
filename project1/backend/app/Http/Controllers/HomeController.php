<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Home;
use Validator;


class HomeController extends Controller
{
    public function create(Request $request)
    {
        $data= new Home;
        $data->name = $request->name; 
        $data->email = $request->email; 
        $data->phone_no = $request->phone_no; 
        $data->password = $request->password; 
        $data->address = $request->address;
        $data->save();
        return response()->json($data); 
    }
    public function index($id=null){
        $data = $id?Home::find($id):Home::all();
        return response()->json($data);
    }
    public function delete(Request $request,$id)
    {
        $data=Home::find($id);
        if($data->delete())
        {
            return ["Result"=>"Data has been deleted"];
        }
        else{
            return ["Result"=>"Not deleted"];
        }
        
    }
    public function showByID($id)
        {
            $data = Home::find($id)->get();
            if($data)
            {
                return response()->json($data);
            }
            else{
                return ["Result"=>"Data not found"];
            }
            
        }
        public function update(Request $request,$id)
        {
            $data=Home::find($request->id);
            $data->name=$request->name;
            $data->email=$request->email;
            $data->phone_no=$request->phone_no;
            $data->password=$request->password;
            $data->address=$request->address;
            if($data->update())
            {
                    return ["Result"=>"Data has been updated"];
            }
            else{
                return ["Result"=>"Not updated"];
            }
        }


}
