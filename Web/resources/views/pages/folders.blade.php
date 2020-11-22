@extends('main')

@section('variables')
    @php
        $company="Providata";
        $title="Folders";
        $page="Folders";
    @endphp
@stop

@section('content')
    <div class="row">
        <div class="col-md-3 col-sm-12">
            <div class="row">
                <div class="col-md-12">
                    <span class="font-medium-3"> Folders </span>

                        @foreach($data as $d)
                            <div class="card mt-1">
                                <div class="card-content py-50 px-1 folder-info">
                                    <div class="d-flex justify-content-between align-items-center mb-1">
                                        <span><i class="feather icon-folder font-medium-5"></i></span>
                                    </div>
                                    <div class="row align-items-center">
                                            <div class="col-md-10">
                                                <h6 class="font-medium-2 mb-0">{{ $d['name']}}</h6>
                                                <div class="text-small-3 text-muted">{{$d['count']}} files</div>
                                            </div>
                                        <div class="col-md-2">
                                            <button type="button" value="{{$d['id']}}" id="getfolder" class="getfolder btn btn-sm btn-icon btn-primary waves-effect waves-light"><i class="feather icon-eye"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                </div>
            </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-8 col-sm-12">
            <span class="font-medium-3"> Files </span>
            <div class="row">
                @foreach($filatov as $d)
                    <div class="col-md-6 folder" id="test{{$d['id_folder']}}" style="display: none">
                        <div class="card mt-1">
                            <div class="card-content py-50 px-1 folder-info">
                                <div class="d-flex justify-content-between align-items-center mb-1">
                                    <span><i class="feather icon-file-text font-medium-5"></i></span>
                                </div>
                                <div class="row align-items-center">
                                    <div class="col-md-10">
                                        <h6 class="font-medium-2 mb-0">{{$d['fname']}}</h6>
                                    </div>
                                    <div class="col-md-2">
                                        <button value="{{$d['id_file']}}" type="button" class="download btn btn-sm btn-icon btn-success waves-effect waves-light"><i class="feather icon-download"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>

    <script>
        var element = document.getElementById("Folders");
        element.classList.add("active");

        $(".getfolder").click(function(e){
            var id = $(this).val();
            var target = '.folder';
            $(target + '#test' + id).css('display', 'block');
            $(target).not('#test' + id).css('display', 'none');
        });

        $(".download").click(function(e){
            var id = $(this).val();
            var link = '/download?id='+id;
            $.ajax({
                url: "{{route('file.download')}}",
                method: "get",
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                data: {id:$(this).val()},
                success: function (data) {
                    window.location.href = link;
                }
            })
        });

        /*$(".getfolder").click(function(e){
            $.ajax({
                url: "{{route('get.files')}}",
                method: "get",
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                data: {id:$(this).val()},
                success: function (data) {
                }
            })
        });*/
    </script>

@endsection
