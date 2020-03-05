<template>
    <div>
        <my-header></my-header>
        <my-nav></my-nav>
        <my-main></my-main>
        <my-footer></my-footer>
    </div>
</template>

<script>
import MyHeader from './MyHeader';
import MyNav from './MyNav';
import MyMain from "./myMain"
import MyFooter from "./MyFooter"
export default {
    components:{ MyHeader,MyNav,MyMain,MyFooter }
}
</script>