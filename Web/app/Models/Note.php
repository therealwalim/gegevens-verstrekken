<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property string     $title
 * @property string     $content
 * @property int        $users_id
 */
class Note extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'notes';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'content', 'users_id', 'user_id'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [

    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'title' => 'string', 'content' => 'string', 'users_id' => 'int'
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [

    ];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var boolean
     */
    public $timestamps = false;

    // Scopes...

    // Functions ...

    // Relations ...
    public function user()
    {
        return $this->belongsToMany('App\Models\User','users_id','id');
    }
}
