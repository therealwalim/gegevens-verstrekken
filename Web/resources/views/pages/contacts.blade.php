@extends('main')

@section('variables')
    @php
        $company="Providata";
        $title="Contacts";
        $page="Contacts";
    @endphp
@stop

@section('content')
    <div class="row">
        <div class="col-lg-3 col-sm-6 col-12">
            <div class="card">
                <div class="card-header d-flex align-items-start pb-0">
                    <div>
                        <h2 class="text-bold-700 mb-0">Agnès B</h2>
                        <p>0770293837</p>
                    </div>
                    <div class="avatar bg-rgba-primary p-50 m-0">
                        <div class="avatar-content">
                            <i class="feather icon-users text-primary font-medium-5"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        var element = document.getElementById("Contacts");
        element.classList.add("active");
    </script>
@endsection
