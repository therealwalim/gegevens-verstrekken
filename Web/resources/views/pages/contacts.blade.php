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
        @foreach($contact as $contacts)
            <div class="col-lg-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-header d-flex align-items-start pb-0">
                        <div>
                            <h2 class="text-bold-700 mb-0">{{$contacts->name}}</h2>
                            <p>{{$contacts->phone}}</p>
                        </div>
                        <div class="avatar bg-rgba-primary p-50 m-0">
                            <div class="avatar-content">
                                <i class="feather icon-users text-primary font-medium-5"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach
    </div>

    <script>
        var element = document.getElementById("Contacts");
        element.classList.add("active");
    </script>
@endsection
