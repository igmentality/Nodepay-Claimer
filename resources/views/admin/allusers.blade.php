@extends('layouts.admin')
@section('slot')
    <!-- START: Main Content-->
    <main>
        <div class="container-fluid site-width">
            <!-- START: Breadcrumbs-->
            <div class="row ">
                <div class="col-12  align-self-center">
                    <div class="sub-header mt-3 py-3 align-self-center d-sm-flex w-100 rounded">
                        <div class="w-sm-100 mr-auto">
                            <h4 class="mb-0">Basic Table</h4>
                        </div>

                        <ol class="breadcrumb bg-transparent align-self-center m-0 p-0">
                            <li class="breadcrumb-item">Home</li>
                            <li class="breadcrumb-item">Table</li>
                            <li class="breadcrumb-item active"><a href="#">Basic</a></li>
                        </ol>
                    </div>
                </div>
            </div>
            <!-- END: Breadcrumbs-->

            <!-- START: Card Data-->
            <div class="row">
                <div class="col-12 col-sm-6 col-md-12 mt-3">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title">Default</h4>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">If Banned</th>
                                            <th scope="col">Action</th>
                                            <th scope="col">Wallet</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($users as $u)
                                            <tr>
                                                <th scope="row">{{ $u->id }}</th>
                                                <td>{{ $u->first_name }}</td>
                                                <td>{{ $u->last_name }}</td>
                                                <td>{{ $u->email }}</td>
                                                <td>{{ $u->phone }}</td>
                                                @if ($u->banned_until == null)
                                                    <td class="text-center">Nil</td>
                                                @elseif($u->banned_until == 0)
                                                    <td class="text-center">Banned</td>
                                                @else
                                                    <td class="text-center">Suspended till {{ $u->banned_until }}</td>
                                                @endif

                                                <td class="text-center">
                                                    @if ($u->banned_until == null)
                                                        <div class="btn-group">
                                                            <a href="{{ route('user.suspend', $u) }}" class="px-1"><button
                                                                    class="btn btn-warning btn-sm"
                                                                    style="width: 75px">Suspend</button></a>
                                                            <a href="{{ route('user.ban', $u) }}"><button
                                                                    class="btn btn-danger btn-sm"
                                                                    style="width: 50px">Ban</button></a>
                                                        </div>
                                                    @else
                                                        <a href="{{ route('user.unban', $u) }}"><button
                                                                class="btn btn-success btn-sm"
                                                                style="width: 60px">Unban</button>
                                                        </a>
                                                    @endif
                                                </td>
                                                <td>
                                                    @if ($u->wallet)
                                                        <a href="{{route('admin.updatebalance.view', $u)}}">
                                                            <button class="btn btn-success btn-sm"
                                                                style="width: 80px">Update Balance</button>
                                                        </a>
                                                    @else
                                                        <a href="{{route('admin.createwallet',$u)}}">
                                                            <button class="btn bg-primary btn-sm text-white"
                                                                style="width: 80px">Create Wallet</button>
                                                        </a>
                                                    @endif

                                                </td>
                                            </tr>
                                        @endforeach


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <!-- END: Card DATA-->
        </div>
    </main>
    <!-- END: Content-->
@endsection
