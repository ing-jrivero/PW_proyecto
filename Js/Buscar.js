
function buscar()
{
    
    let busqueda=document.querySelectorAll(".buscar > .buscar_texto")[0].value
    let texto=busqueda.toLowerCase();
    let re_guitarras=/(guitarras?)/i;
    let re_baterias=/(baterias?)/i;
    let re_bosinas=/(bosinas?)/i;
  //  alert(texto)
    if(re_guitarras.test(texto))
    {
        alert("buscaste guitarras")
    }
    else if(re_baterias.test(texto))
    {
        alert("buscaste baterias")

    }
    else if(re_bosinas.test(texto))
    {

    }
    else
    {
        alert("Chinga tu madre")

    }




}