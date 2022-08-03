import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSupplieDetail } from "../../../redux/OwnerSupplies/SuppliesDetailOwner/SuppliesDetailAction"

export default function SupplieDetail({ id }) {
    const dispatch = useDispatch();
    let supplie = useSelector((state) => state.supplieDetailReducer.complexDetail)
    console.log(supplie, 'soy supplie')
    useEffect(() => {
        dispatch(getSupplieDetail(id));
    })

    return (
        <div>
            <div>
                <Link to='/suppliesOwner' style={{ 'padding': '10px', 'width': '25%', 'margin': '20px 10px 10px 10px' }}>
                    <Button style={{ 'marginTop': '15px' }}>Volver</Button>
                </Link>
            </div>
            <div>
                <h1>Detail supplie</h1>
            </div>
        </div>
    )
}