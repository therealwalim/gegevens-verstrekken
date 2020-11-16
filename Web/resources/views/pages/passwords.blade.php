@extends('main')

@section('variables')
    @php
        $company="Providata";
        $title="Passwords";
        $page="Passwords";
    @endphp
@stop

@section('content')
    <div class="row">
        <div class="col-lg-3 col-sm-6 col-12">
            <div class="card">
                <div class="card-header d-flex align-items-start pb-0">
                    <div>
                        <h4 class="text-bold-700 mb-0">agnes@email.fr</h4>
                        <p>0770293837</p>
                    </div>
                    <div class="avatar bg-rgba-success p-50 m-0">
                        <div class="avatar-content">
                            <i class="fa fa-spotify text-success font-medium-5"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        var element = document.getElementById("Passwords");
        element.classList.add("active");
    </script>
@endsection
