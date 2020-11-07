@component('mail::message')
# Bienvenue {{ $data['name'] }}

Votre compte a été créé mais vous devrez le faire vérifier afin de pouvoir vous connecter.

@component('mail::button', ['url' => url('/api/verify?code='.$data['verification_code'])])
    Vérifier mon compte
@endcomponent

Merci,<br>
{{ config('app.name') }}
@endcomponent
