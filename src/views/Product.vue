
<template>
  <div class="collection-header">
    <div class="max-w-3xl mx-auto">
      <h1 class=" py-8 text-center text-white text-3xl">
        Product Collection 
      </h1>
      <p class="pb-5 text-center text-gray-300">

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod.
      </p>
    </div>
  </div>

  <div class="grid md:grid-cols-4 mt-3 gap-4 py-3 px-5">
 
  <div class="col-1 ">
  <div class="collection-cat">
     <h1 class="text-white text-center font-bold mt-12 text-3xl">MAN</h1>
    <h6 class="text-gray-300 text-center">Best Product For Man</h6>

      <span class="sm:ml-3 flex pb-3 justify-center mt-10 mb-8">
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-indigo-100 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <CheckIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Read More ...
        </button>
      </span>
  </div>
    
  </div>
  <div class="col-1 collection-cat ">
    <h1 class="text-white text-center font-bold mt-12 ">MAN</h1>
    <h6 class="text-gray-300 text-center">Best Product For Man</h6>

      <span class="sm:ml-3 flex pb-3 justify-center mt-10 mb-8">
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-indigo-100 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <CheckIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Read More ...
        </button>
      </span>
  </div>
  <div class="col-1 collection-cat ">
    <h1 class="text-white text-center font-bold mt-12 ">MAN</h1>
    <h6 class="text-gray-300 text-center">Best Product For Man</h6>

      <span class="sm:ml-3 flex pb-3 justify-center mt-10 mb-8">
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-indigo-100 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <CheckIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Read More ...
        </button>
      </span>
  </div>
  <div class="col-1 collection-cat ">
    <h1 class="text-white text-center font-bold mt-12 ">MAN</h1>
    <h6 class="text-gray-300 text-center">Best Product For Man</h6>

      <span class="sm:ml-3 flex pb-3 justify-center mt-10 mb-8">
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-indigo-100 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <CheckIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Read More ...
        </button>
      </span>
  </div>


</div>

</template>

<script>
const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
]

export default {
  setup() {
    return {
      products,
    }
  },
}
</script>

<style scoped>
.collection-header{
  background-image: url('../assets/product-header.jpg');
  background-repeat: no-repeat;
}

.collection-cat{
  background-image: url('../assets/baner-right-image-01.jpg');
  background-repeat: no-repeat;
  overflow: hidden;
}
</style>