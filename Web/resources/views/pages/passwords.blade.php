@extends('main')

@section('variables')
    @php
        $company="Providata";
        $title="Passwords";
        $page="Passwords";
    @endphp
@stop

@section('content')
    <section id="description" class="card">
        <div class="card-header">
            <h4 class="card-title">Description</h4>
        </div>
        <div class="card-content">
            <div class="card-body">
                <div class="card-text">
                    <p>The floating navigation layout has a fixed navigation and floating navbar menu and footer. Only navigation section and navbar menu is fixed to user. Navbar Wrapper has specing from all sides. In this page you can experience it.</p>
                </div>
            </div>
        </div>
    </section>

    <script>
        var element = document.getElementById("Passwords");
        element.classList.add("active");
    </script>
@endsection
