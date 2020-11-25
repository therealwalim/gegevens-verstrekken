@extends('main')

@section('variables')
    @php
        $company="Providata";
        $title="Administration";
        $page="Users";
    @endphp
@stop

@section('content')
    <!-- BEGIN: Vendor CSS-->
    <link rel="stylesheet" type="text/css" href="{{asset('app-assets/vendors/css/vendors.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('app-assets/vendors/css/tables/ag-grid/ag-grid.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('app-assets/vendors/css/tables/ag-grid/ag-theme-material.css')}}">
    <!-- END: Vendor CSS-->

    <!-- users list start -->
        <!-- Ag Grid users list section start -->
        <div id="basic-examples">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <div class="ag-grid-btns d-flex justify-content-between flex-wrap mb-1">
                                    <div class="dropdown sort-dropdown mb-1 mb-sm-0">
                                        <button class="btn btn-white filter-btn dropdown-toggle border text-dark" type="button" id="dropdownMenuButton6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            1 - 20 of 50
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton6">
                                            <a class="dropdown-item" href="#">20</a>
                                            <a class="dropdown-item" href="#">50</a>
                                        </div>
                                    </div>
                                    <div class="ag-btns d-flex flex-wrap">
                                        <input type="text" class="ag-grid-filter form-control w-50 mr-1 mb-1 mb-sm-0" id="filter-text-box" placeholder="Search...." />
                                        <div class="action-btns">
                                            <div class="btn-dropdown ">
                                                <div class="btn-group dropdown actions-dropodown">
                                                    <button type="button" class="btn btn-white px-2 py-75 dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Actions
                                                    </button>
                                                    <div class="dropdown-menu">
                                                        <a class="dropdown-item" href="#"><i class="feather icon-trash-2"></i> Delete</a>
                                                        <a class="dropdown-item" href="#"><i class="feather icon-clipboard"></i> Archive</a>
                                                        <a class="dropdown-item" href="#"><i class="feather icon-printer"></i> Print</a>
                                                        <a class="dropdown-item" href="#"><i class="feather icon-download"></i> CSV</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="myGrid" class="aggrid ag-theme-material"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Ag Grid users list section end -->
    </section>
    <!-- users list ends -->

    <script src="{{asset('app-assets/js/scripts/pages/app-user.js')}}"></script>

    <script>
        var element = document.getElementById("Admin");
        element.classList.add("active");


    </script>
    <!-- BEGIN: Page Vendor JS-->
    <script src="{{asset('app-assets/vendors/js/tables/ag-grid/ag-grid-community.min.noStyle.js')}}"></script>
    <!-- END: Page Vendor JS-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
@endsection
