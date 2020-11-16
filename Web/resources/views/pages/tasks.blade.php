@extends('main')

@section('variables')
    @php
        $company="Providata";
        $title="Tasks";
        $page="Tasks";
    @endphp
@stop

@section('content')
    <link rel="stylesheet" type="text/css" href="{{asset('app-assets/css/plugins/extensions/drag-and-drop.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('app-assets/vendors/css/extensions/dragula.min.css')}}">

    <section id="draggable-cards">
        <div class="row" id="card-drag-area">
            <div class="col-xl-3 col-md-6 col-sm-12 delete">
                <div class="card">
                    <div class="card-header align-items-center">
                        <h4 class="card-title">
                            Note 1
                        </h4>
                        <button type="button" id="hide" class="btn btn-sm btn-icon btn-danger waves-effect waves-light"><i class="feather icon-trash-2"></i></button>
                    </div>
                    <div class="card-content">
                        <div class="card-body">
                            <p class="card-text">
                                Jelly beans sugar plum cheesecake cookie oat cake soufflé.Tootsie roll bonbon liquorice tiramisu pie
                                powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- // Draggable cards section end -->

    <script>

        // Set menu active
        var element = document.getElementById("Tasks");
        element.classList.add("active");

        // Hide card test
        $("#hide").click(function(){
            $(".delete").hide();
        });
    </script>

    <!-- BEGIN: Page Vendor JS-->
    <script src="{{asset('app-assets/vendors/js/extensions/dragula.min.js')}}"></script>
    <!-- END: Page Vendor JS-->

    <!-- BEGIN: Page JS-->
    <script src="{{asset('app-assets/js/scripts/extensions/drag-drop.js')}}"></script>
    <!-- END: Page JS-->
@endsection
