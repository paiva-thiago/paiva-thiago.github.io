const historyItem = (from, to, jobTitle, company, description, tags, position)=>( { type:'hist', class:'content', hasText:true, from, to, pos:'container '.concat(position), sTitle1:jobTitle, sTitle2:company, txt:description, techs:tags})
const placeItem = (place)=>({ type:'place', class:'sign place', hasText:false, title:place})
const eventItem = (description)=>({ type: 'status', class:"sign status", hasText:false, title:description})
const words = {
    en:{
        from:'From',
        to:'to',
        since:'Since'
    }
  }