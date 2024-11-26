<script>

    import Comp1 from './pokebox1.svelte';

    let pokeChange1;

    console.log("hii")
    //https://svelte.dev/playground/62235b43f41948d4bd2b03221668a246?version=3.31.0#H4sIAAAAAAAACtVT22rcMBD9lakIeBfMuutH7wVK6GP7A3UhXmc2FkgjI41ywfjfiyx7470kkMc-2OCZc-Zy5rgTVGkUhfj52hrLcG_IsUjFUSp0ovjTCX5rQz4ERDqhf7Ttyj2j4hA7VA5vxWtDjMROFGLraitb3pdUstRjJ90aQuI1HK3RkKyy99BYJNncIuTXhPyMEB6FDLXR7Xoz_8pP-bFoB4Z-GU8M_Vh1XmjMLRZL2O2hG7hcG3JG4UqZp8UDS1ZYQCnuuqHbagj0pXhYbiZ4CDf4tpgi8Z1l4Kk2WiMxcCMdHI2FigCtNbY4gSKfvL4gDxTpoFLKvOAjOEk1wgtCUz1jXDZxJ3RV1-icsQ4cMrABth7BO0lPEDcuTMvSkLteshT1pDPkiQPyuihFGnuEyZaB0y9L2mbvd6bt7MIHSY9FmHgXZeoh288R-SUiDwiRCsZXFkUYtk8_8OKVa84teSv9gTMx_gNhd4bhkLCD5LfXB7RFdMQIOXqqg1ow3PWWM5IGlTLfknj0frLdyA9-JK9hB983l7I162GYLjoJOvK6D5hm_VVB8s8Fyf8TQc79ObNy9kXB_vb_AB5qnPDvBAAA

    // searchButton.addEventListener('click', function pokePick(pokeSearch) {

    //     let pokemon1 = searchInput.value;

    //     console.log(pokemon1)
    // }) 

    import { onMount } from 'svelte';
	onMount(() => {

    //function selectPoke(){
        // let input =
        // document.getElementById('searchbar').value
      $:  console.log(`${pokeChange1.poke1}`);
        
    // }
	// 	selectPoke()
		
		// uncomment this for an error:
		// comp1.num
		
		// this is allowed since we have comp2's
		// accessors set to true using svelte:options
		
	})

</script>

<input type="search" id="search"
placeholder="Search Pokémon...">
<input type="submit" id="submit"
onclick={selectPoke()}>

<!-- https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/ -->