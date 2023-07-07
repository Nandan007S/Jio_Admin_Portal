import React from 'react';
import '../styles/tables.css';
import { useState } from 'react';

const TenantsTableRow = ({ data, index }) => {
    const [volumeControlEnabled, setVolumeControlEnabled] = useState(data.features.volumeControlEnabled);
    const [productDrawerEnabled, setProductDrawerEnabled] = useState(data.features.productDrawerEnabled);
    const [reportEnabled, setReportEnabled] = useState(data.features.reportEnabled);
    const [likeEnabled, setLikeEnabled] = useState(data.features.likeEnabled);
    const [active, setActive] = useState(data.active);

    async function handleChange(e) {
        const temp = [volumeControlEnabled, productDrawerEnabled, reportEnabled, likeEnabled, active];
        if(e.target.id == 'volumeControlEnabled') temp[0] = !temp[0]
        else if(e.target.id == 'productDrawerEnabled') temp[1] = !temp[1];
        else if(e.target.id == 'reportEnabled') temp[2] = !temp[2]
        else if(e.target.id == 'active') temp[4] = !temp[4];
        else temp[3] = !temp[3]
        
        if(e.target.id != 'active') {
            const res = await fetch(`https://649ebb2f245f077f3e9cd0c1.mockapi.io/Tenants/${data.id}`,{
                method: 'PUT',
                headers: {'content-type':'application/json'},
                body: JSON.stringify({ features : {'volumeControlEnabled': temp[0], 'productDrawerEnabled': temp[1], 'reportEnabled': temp[2], 'likeEnabled': temp[3]}})
            })
            const response = await res.json()
            console.log(response)
            setVolumeControlEnabled(temp[0]); setProductDrawerEnabled(temp[1]); setReportEnabled(temp[2]); setLikeEnabled(temp[3]);
        }
        else {
            const res = await fetch(`https://649ebb2f245f077f3e9cd0c1.mockapi.io/Tenants/${data.id}`,{
                method: 'PUT',
                headers: {'content-type':'application/json'},
                body: JSON.stringify({ active: temp[4]})
            })
            const response = await res.json()
            console.log(response)
            setActive(temp[4]);
        }
        
        
    }


    return (
        <>
            <tr>
                <td>{data.name}</td>
                <td>{data.domain}</td>
                <td>
                    <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target={`#modal${index}`} id="featuresButton">
                        Features
                    </button>
                    <div className='modal fade' id={`modal${index}`}>
                        <div className='modal-dialog modal-dialog-centered'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <h2>Enable/Disable Features</h2>
                                    <button className='btn-close' data-bs-dismiss="modal" data-bs-target={`#modal${index}`}></button>
                                </div>
                                <div className='modal-body' id='features'>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" id="volumeControlEnabled" checked = {volumeControlEnabled} onChange={handleChange}/>
                                    <h7>Volume Control</h7>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" id="productDrawerEnabled" checked = {productDrawerEnabled} onChange={handleChange}/>
                                    <h7>Product Drawer</h7>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" id="reportEnabled" checked = {reportEnabled} onChange={handleChange}/>
                                    <h7>Report Enabled</h7>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch" id="likeEnabled" checked = {likeEnabled} onChange={handleChange}/>
                                    <h7>Like Enabled</h7>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="active" checked = {active} onChange={handleChange}/>
                </div>
                </td>
            </tr>
        </>
    );
}

export default TenantsTableRow