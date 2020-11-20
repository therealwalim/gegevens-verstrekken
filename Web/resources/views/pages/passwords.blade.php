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
        @foreach($password as $passwords)
            <div class="col-lg-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-header d-flex align-items-start pb-0">
                        <div>
                            <h5 class="text-bold-700 mb-0">{{$passwords->serviceid}}</h5>
                            <p>{{$passwords->password}}</p>
                        </div>
                        @if($passwords->service === "twitter")
                            <div class="avatar bg-rgba-info p-35 m-0" title="" data-placement="left" data-toggle="tooltip" data-original-title="{{$passwords->service}}">
                                <div class="avatar-content">
                                    <i class="fa fa-{{$passwords->service}} text-info font-medium-3"></i>
                                </div>
                            </div>
                        @elseif($passwords->service === "spotify")
                            <div class="avatar bg-rgba-success p-35 m-0" title="" data-placement="left" data-toggle="tooltip" data-original-title="{{$passwords->service}}">
                                <div class="avatar-content">
                                    <i class="fa fa-{{$passwords->service}} text-success font-medium-3"></i>
                                </div>
                            </div>
                        @elseif($passwords->service === "facebook")
                            <div class="avatar bg-rgba-primary p-35 m-0" title="" data-placement="left" data-toggle="tooltip" data-original-title="{{$passwords->service}}">
                                <div class="avatar-content">
                                    <i class="fa fa-{{$passwords->service}} text-primary font-medium-3"></i>
                                </div>
                            </div>
                        @elseif($passwords->service === "snapchat")
                            <div class="avatar bg-rgba-warning p-35 m-0" title="" data-placement="left" data-toggle="tooltip" data-original-title="{{$passwords->service}}">
                                <div class="avatar-content">
                                    <i class="fa fa-{{$passwords->service}} text-warning font-medium-3"></i>
                                </div>
                            </div>
                        @else
                            <div class="avatar bg-rgba-danger p-35 m-0" title="" data-placement="left" data-toggle="tooltip" data-original-title="{{$passwords->service}}">
                                <div class="avatar-content">
                                    <i class="feather icon-globe text-danger font-medium-5"></i>
                                </div>
                            </div>
                        @endif

                    </div>
                </div>
            </div>
        @endforeach
    </div>

    <script>
        var element = document.getElementById("Passwords");
        element.classList.add("active");
    </script>
@endsection
