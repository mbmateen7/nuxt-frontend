<template>
    <div>
        <Header />
        <div class="main-body profile-wrapper">
            <div class="content container">
                <div class="row">
                    <div class="col-md-3">
                        <Sidebar />
                    </div>
                    <div class="col-md-9">
                        <Nuxt />
                    </div>
                </div>


            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
    export default {
        middleware: ['auth'],
    }

</script>

<style lang="scss">

</style>
