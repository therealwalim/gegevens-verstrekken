<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @property string     $display_mode
 * @property int        $users_id
 */
class Param extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'params';

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
        'lang', 'display_mode', 'users_id', 'user_id'
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
        'display_mode' => 'string', 'users_id' => 'int'
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
        return $this->belongsTo('App\Models\User');
    }
}
