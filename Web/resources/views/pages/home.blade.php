@extends('main')

@section('variables')
    @php
        $company="Providata";
        $title="Dashboard";
        $page="Home";
    @endphp
@stop

@section('content')
    <section id="statistics-card">
        <div class="row">
            @role('administrator')
            <div class="col-xl-2 col-md-4 col-sm-6">
                <div class="card text-center">
                    <div class="card-content">
                        <div class="card-body">
                            <div class="avatar bg-rgba-primary p-50 m-0 mb-1">
                                <div class="avatar-content">
                                    <i class="feather icon-users text-primary font-medium-5"></i>
                                </div>
                            </div>
                            <h2 class="text-bold-700">{{ $ucount }}</h2>
                            <p class="mb-0 line-ellipsis">Users</p>
                        </div>
                    </div>
                </div>
            </div>
            @endrole
            <div class="col-xl-2 col-md-4 col-sm-6">
                <div class="card text-center">
                    <div class="card-content">
                        <div class="card-body">
                            <div class="avatar bg-rgba-warning p-50 m-0 mb-1">
                                <div class="avatar-content">
                                    <i class="feather icon-message-square text-warning font-medium-5"></i>
                                </div>
                            </div>
                            <h2 class="text-bold-700">{{ $mcount }}</h2>
                            <p class="mb-0 line-ellipsis">Messages</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-2 col-md-4 col-sm-6">
                <div class="card text-center">
                    <div class="card-content">
                        <div class="card-body">
                            <div class="avatar bg-rgba-info p-50 m-0 mb-1">
                                <div class="avatar-content">
                                    <i class="feather icon-user text-info font-medium-5"></i>
                                </div>
                            </div>
                            <h2 class="text-bold-700">{{ $ccount }}</h2>
                            <p class="mb-0 line-ellipsis">Contacts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script>
        var element = document.getElementById("Dashboard");
        element.classList.add("active");
    </script>
@endsection
