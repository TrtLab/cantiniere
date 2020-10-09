window.addEventListener("load", async () => {

    console.log("autre coucou");

    // Header component
    const loadComponent = async (template) => {
        let url = template.getAttribute('component');
        let comp = document.createElement('div');
        url = url;
        let src = await fetch(url).then(res => res.text());
        src = src.trim();
        comp.innerHTML = src;
        template.replaceWith(comp);
    }

    const loadAllComponents = async () => {
        let comps = document.querySelectorAll("template[component]");
        for (let comp of comps){
            await loadComponent(comp)
        }
    }

    // window.addEventListener('load', ()=>{
    await loadAllComponents();
     });
