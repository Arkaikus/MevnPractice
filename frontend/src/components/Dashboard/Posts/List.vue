<template>
  <div
    class="
      d-flex
      justify-content-between
      flex-wrap flex-md-nowrap
      align-items-center
      pt-3
      pb-2
      mb-3
      border-bottom
    "
  >
    <h1 class="h2">Posts</h1>
    <div class="btn-toolbar mb-2 mb-md-0">      
      <div class="btn-group me-2">
        <button type="button" class="btn btn-sm btn-outline-secondary">
          Share
        </button>
        <button type="button" class="btn btn-sm btn-outline-secondary">
          Export
        </button>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-outline-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          This week
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  </div>

  <h2>Section title</h2>
  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1,001</td>
          <td>random</td>
          <td>data</td>
          <td>placeholder</td>
          <td>text</td>
        </tr>
        <tr>
          <td>1,001</td>
          <td>random</td>
          <td>data</td>
          <td>placeholder</td>
          <td>text</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>