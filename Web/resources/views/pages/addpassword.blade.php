@extends('main')

@section('variables')
    @php
        $company="Providata";
        $title="Passwords";
        $page="Add Password";
    @endphp
@stop

@section('content')

    <section id="floating-label-layouts">
        <div class="row match-height">
            <div class="col-md-6 col-12">
                <div class="card" style="height: 310.283px;">
                    <div class="card-header">
                        <h4 class="card-title">Add a password</h4>
                    </div>
                    <div class="card-content">
                        <div class="card-body">
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-label-group">
                                            <input type="text" id="first-name-floating" class="form-control" placeholder="Service" name="service">
                                            <label for="first-name-floating">Service</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-label-group">
                                            <input type="text" id="first-name-floating" class="form-control" placeholder="ID" name="serviceid">
                                            <label for="first-name-floating">ID</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-label-group">
                                            <input type="password" id="password-floating" class="form-control" name="password" placeholder="Password">
                                            <label for="password-floating">Password</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button id="addnote" class="btn btn-primary mr-1 mb-1 waves-effect waves-light">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-12">
            </div>
        </div>
        </div>
    </section>

    <script>

        // Set menu active
        var element = document.getElementById("Tasks");
        element.classList.add("active");

        // Hide card test

        // Function to create note
        $("#addnote").click(function(e){
            var service = $("input[name=service]").val();
            var serviceid = $("input[name=serviceid]").val();
            var password = $("input[name=password]").val();
            $.ajax({
                url: "{{route('pass.create')}}",
                method: "post",
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                data: {service:service,serviceid:serviceid,password:password},
                success: function (data) {
                    if(data == "created")
                    {
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
                            title: 'Password added with success'
                        })
                    }
                }
            })
        });
    </script>

@endsection

