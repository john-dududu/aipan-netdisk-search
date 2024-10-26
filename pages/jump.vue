<script setup>
const { isMobile } = useDevice()
const router = useRouter()

onMounted(() => {
  if (isMobile) {
    // 移动设备跳转的 URL
    window.location.href = 'https://www.2q0io2.com:9962/entry/register47451/?i_code=3493249'
  } else {
    // PC 设备跳转的 URL
    window.location.href = 'https://www.wyco0f.com:9033/register47451/?i_code=3493249'
  }
})
</script>

<template>
  <div id="ad-container" class="my-8 flex justify-center" >正在跳转...</div>
</template>