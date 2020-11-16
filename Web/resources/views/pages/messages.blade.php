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
        <div class="col-lg-3 col-sm-6 col-12">
            <div class="card">
                <div class="card-header d-flex align-items-start pb-0">
                    <div>
                        <h2 class="text-bold-700 mb-0">Agnès B</h2>
                        <p>0770293837</p>
                    </div>
                    <div class="avatar bg-rgba-warning p-50 m-0">
                        <div class="avatar-content">
                            <i class="feather icon-message-square text-warning font-medium-5"></i>
                        </div>
                    </div>
                    <p>Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la cænogenèse de l"être dont il est question dans la cause ambiguë entendue à Moÿ, dans un capharnaüm qui, pense-t-il, diminue çà et là la qualité de son œuvre. Prouvez, beau juge, que le fameux…</p>
                </div>
            </div>
        </div>
    </div>

    <script>
        var element = document.getElementById("Messages");
        element.classList.add("active");
    </script>
@endsection
