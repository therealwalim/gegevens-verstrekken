@extends('main')

@section('variables')
    @php
        $company="Providata";
        $title="Messages";
        $page="Messages";
    @endphp
@stop

@section('content')
    <div class="row">
        @foreach($messages as $message)
            <div class="col-lg-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-header d-flex align-items-start pb-0">
                        <div>
                            <h2 class="text-bold-700 mb-0">{{$message->sender}}</h2>
                            <p></p>
                        </div>
                        <div class="avatar bg-rgba-warning p-50 m-0">
                            <div class="avatar-content">
                                <i class="feather icon-message-square text-warning font-medium-5"></i>
                            </div>
                        </div>
                        <p>{{$message->content}}</p>
                    </div>
                </div>
            </div>
        @endforeach
    </div>

    <script>
        var element = document.getElementById("Messages");
        element.classList.add("active");
    </script>
@endsection
