<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\Models\User;

class UserController extends Controller
{
    
    public function register(Request $request){

        $validator = Validator::make($request->all(),
            [
                'name'=>'required',
                'email'=>'required|email',
                'password'=>'required',
                'c_password'=>'required|same:password',
            ]);
        if($validator->fails()){

            return response()->json($validator->errors(),202);
        }
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);

        $responseArray = [];
        $responseArray['token']=$user->createToken('MyApp')->accessToken;
        $responseArray['name']=$user->name;
        $responseArray['email']=$user->email;
        return response()->json($responseArray,200);
    }
}
