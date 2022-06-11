<template>
  <h2 class="intro-y text-lg font-semibold mt-10">Notification</h2>
  <div class="grid grid-cols-12 gap-6 mt-5">
   
    <!-- BEGIN: Users Layout -->
    <div
      v-for="(faker, fakerKey) in $_.take($f(), 10)"
      :key="fakerKey"
      class="intro-y col-span-12 md:col-span-6"
    >
      <div class="box">
        <div
          class="
            flex flex-col
            lg:flex-row
            items-center
            p-5
            border-b border-slate-200/60
            dark:border-darkmode-400
          "
        >
          <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="rounded-full"
              :src="faker.photos[0]"
            />
          </div>
          <div class="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
            <a href="" class="font-medium">{{ faker.users[0].name }}</a>
            <div class="text-slate-500 text-xs mt-0.5">
              {{ faker.jobs[0] }}
            </div>
          </div>
          <div class="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
            <Tippy
              tag="a"
              href=""
              class="
                w-8
                h-8
                rounded-full
                flex
                items-center
                justify-center
                border
                dark:border-darkmode-400
                ml-2
                text-slate-400
                zoom-in
              "
              content="Facebook"
            >
              <FacebookIcon class="w-3 h-3 fill-current" />
            </Tippy>
            <Tippy
              tag="a"
              href=""
              class="
                w-8
                h-8
                rounded-full
                flex
                items-center
                justify-center
                border
                dark:border-darkmode-400
                ml-2
                text-slate-400
                zoom-in
              "
              content="Twitter"
            >
              <TwitterIcon class="w-3 h-3 fill-current" />
            </Tippy>
            <Tippy
              tag="a"
              href=""
              class="
                w-8
                h-8
                rounded-full
                flex
                items-center
                justify-center
                border
                dark:border-darkmode-400
                ml-2
                text-slate-400
                zoom-in
              "
              content="Linked In"
            >
              <LinkedinIcon class="w-3 h-3 fill-current" />
            </Tippy>
          </div>
        </div>
        <div
          class="flex flex-wrap lg:flex-nowrap items-center justify-center p-5"
        >
          <div class="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
            <div class="flex text-slate-500 text-xs">
              <div class="mr-auto">Progress</div>
              <div>20%</div>
            </div>
            <div class="progress h-1 mt-2">
              <div
                class="progress-bar w-1/4 bg-primary"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <button class="btn btn-primary py-1 px-2 mr-2">Message</button>
          <button class="btn btn-outline-secondary py-1 px-2">Profile</button>
        </div>
      </div>
    </div>
    <!-- END: Users Layout -->
    <!-- BEGIN: Pagination -->
    <div
      class="
        intro-y
        col-span-12
        flex flex-wrap
        sm:flex-row sm:flex-nowrap
        items-center
      "
    >
      <nav class="w-full sm:w-auto sm:mr-auto">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              <ChevronsLeftIcon class="w-4 h-4" />
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              <ChevronLeftIcon class="w-4 h-4" />
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">...</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">...</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              <ChevronRightIcon class="w-4 h-4" />
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              <ChevronsRightIcon class="w-4 h-4" />
            </a>
          </li>
        </ul>
      </nav>
      <select class="w-20 form-select box mt-3 sm:mt-0">
        <option>10</option>
        <option>25</option>
        <option>35</option>
        <option>50</option>
      </select>
    </div>
    <!-- END: Pagination -->
  </div>
</template>
