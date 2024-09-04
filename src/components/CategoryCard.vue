<template>
<div class="bg-gray-100">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 class="text-3xl font-bold text-blue-900">Каталог</h2>

        <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <div v-for="callout in callouts" :key="callout.name" class="group relative">
            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
              <img :src="callout.imageSrc" :alt="callout.imageAlt" class="h-full w-full object-cover object-center" />
            </div>
            <p class="mb-4 mt-1 text-xl font-semibold text-gray-900">
              <a :href="callout.href">
                <span class="absolute inset-0" />
                {{ callout.name }}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const callouts = [
  {
    name: 'Шкафы',
    imageSrc: 'http://surl.li/aiwlkd',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Диваны',
    imageSrc: 'http://surl.li/qbbgqe',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '/divany',
  },
  {
    name: 'Кресла',
    description: 'Daily commute essentials',
    imageSrc: 'http://surl.li/qapzvy',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Столы',
    description: 'Daily commute essentials',
    imageSrc: 'https://stulych.ru/upload/iblock/e54/m5tl71g47froitjd66e6cjcee1zbpuf2.JPG',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Стулья',
    description: 'Daily commute essentials',
    imageSrc: 'https://debut-mebel.ru/cache/product/list/shandon-velutto-05-ral-1019-1.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
    {
    name: 'Кухня',
    imageSrc: 'http://surl.li/domult',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]
</script>