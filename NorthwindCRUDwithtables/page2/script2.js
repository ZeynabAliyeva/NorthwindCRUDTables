let url = "https://northwind.vercel.app/api/suppliers"
let tBdy = document.getElementById('tBdy');

axios.get(url).then((res)=>{
    res.data.forEach(element => {
        let trElement = document.createElement('tr')
        let tdCompanyName = document.createElement('td')
        tdCompanyName.innerHTML = element.companyName;
        let tdContactName = document.createElement('td')
        tdContactName.innerHTML = element.contactName;
        let tdContactTitle = document.createElement('td')
        tdContactTitle.innerHTML = element.contactTitle;
        let region_n_td = document.createElement('td')
        region_n_td.innerHTML = element.address.region


        trElement.appendChild(tdCompanyName);
        trElement.appendChild(tdContactName);
        trElement.appendChild(tdContactTitle);
        trElement.appendChild(region_n_td);
        tBdy.appendChild(trElement);

    });
})