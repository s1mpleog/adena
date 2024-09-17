<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import MobileNav from '../components/MobileNav.svelte';
	import NavBar from '../components/NavBar.svelte';
	import PromoBar from '../components/PromoBar.svelte';
</script>

<PromoBar />
<MobileNav />
<NavBar />
<slot></slot>
<Footer />
