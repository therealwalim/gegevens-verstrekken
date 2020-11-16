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
                    <div class="card mt-1">
                        <div class="card-content py-50 px-1 folder-info">
                            <div class="d-flex justify-content-between align-items-center mb-1">
                                <span><i class="feather icon-folder font-medium-5"></i></span>
                            </div>
                            <div class="row align-items-center">
                                <div class="col-md-10">
                                    <h6 class="font-medium-2 mb-0">Analytics</h6>
                                    <div class="text-small-3 text-muted">15 files</div>
                                </div>
                                <div class="col-md-2">
                                    <button type="button" id="hide" class="btn btn-sm btn-icon btn-primary waves-effect waves-light"><i class="feather icon-eye"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-8 col-sm-12">
            <span class="font-medium-3"> Files </span>
            <div class="row">
                <div class="col-md-6">
                    <div class="card mt-1">
                        <div class="card-content py-50 px-1 folder-info">
                            <div class="d-flex justify-content-between align-items-center mb-1">
                                <span><i class="feather icon-file-text font-medium-5"></i></span>
                            </div>
                            <div class="row align-items-center">
                                <div class="col-md-10">
                                    <h6 class="font-medium-2 mb-0">Analytics</h6>
                                </div>
                                <div class="col-md-2">
                                    <button type="button" id="hide" class="btn btn-sm btn-icon btn-success waves-effect waves-light"><i class="feather icon-download"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card mt-1">
                        <div class="card-content py-50 px-1 folder-info">
                            <div class="d-flex justify-content-between align-items-center mb-1">
                                <span><i class="feather icon-file font-medium-5"></i></span>
                            </div>
                            <div class="row align-items-center">
                                <div class="col-md-10">
                                    <h6 class="font-medium-2 mb-0">Analytics</h6>
                                </div>
                                <div class="col-md-2">
                                    <button type="button" id="hide" class="btn btn-sm btn-icon btn-success waves-effect waves-light"><i class="feather icon-download"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        var element = document.getElementById("Folders");
        element.classList.add("active");
    </script>

@endsection
