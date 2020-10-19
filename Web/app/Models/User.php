<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Relationship
    public function Contact()
    {
        return $this->hasMany('App\Models\Contact');
    }

    public function Message()
    {
        return $this->hasMany('App\Models\Message');
    }

    public function Note()
    {
        return $this->hasMany('App\Models\Note');
    }

    public function Password()
    {
        return $this->hasMany('App\Models\Password');
    }

    public function Folder()
    {
        return $this->hasMany('App\Models\Folder');
    }

    public function Param()
    {
        return $this->hasOne('App\Models\Param');
    }

    public function Files()
    {
        return $this->hasManyThrough('App\Models\File', 'App\Models\Folder');
    }
}
