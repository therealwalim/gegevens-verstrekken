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
            @foreach($notes as $note)
                <div class="col-xl-3 col-md-6 col-sm-12 delete">
                    <div class="card">
                        <div class="card-header align-items-center">
                            <h4 class="card-title">
                                {{$note->title}}
                            </h4>
                            <button type="button" value="{{$note->id}}" id="deletenote" class="deletenote{{$note->id}} btn btn-sm btn-icon btn-danger waves-effect waves-light"><i class="feather icon-trash-2"></i></button>
                        </div>
                        <div class="card-content">
                            <div class="card-body">
                                <p class="card-text">
                                    {{$note->content}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </section>
    <!-- // Draggable cards section end -->

    <script>

        // Set menu active
        var element = document.getElementById("Tasks");
        element.classList.add("active");

        // Hide card test

        // Function to delete users
        $("#deletenote").click(function(e){
            $.ajax({
                url: "{{route('note.destroy')}}",
                method: "post",
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                data: {id:$('#deletenote').val()},
                success: function (data) {
                    if(data == "deleted")
                    {
                        $(".delete" + id).hide();
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'bottom-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.addEventListener('mouseenter', Swal.stopTimer)
                                toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })

                        Toast.fire({
                            icon: 'success',
                            title: 'Note deleted with success'
                        })
                    }
                }
            })
        });

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
