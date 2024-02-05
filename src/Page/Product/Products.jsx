import React, { useEffect, useState, useMemo } from 'react'
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Tooltip, } from '@mui/material';
import { Check, Delete, Edit } from '@mui/icons-material';
import Spinner from 'react-bootstrap/Spinner';
import { MaterialReactTable } from "material-react-table";
import Heading from '../../Component/comon/Heading/Heading';



const Products = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [data, setData] = useState("");
    const [data1, setData1] = useState("");
    const handleCloses = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);

    const handelValue = (e) => {

        setCheck({ ...check, [e.target.name]: e.target.value });

    };


    const handleClose = async (e) => {
        e.preventDefault();

    };
    useEffect(() => {
        loadUsers();
        // loadData();
    }, []);
    const loadUsers = async () => {
        try {
            const { data } = await axiosInstance.get('/party')
            if (data?.success) {
                setData(data?.party);
                // console.log("value",data.party);
            }
        } catch (error) {
            console.log(error);
        }

    }
    const Deletes = async (id) => {
        await axiosInstance.delete(`/party/${id}`);
        loadUsers();
    }
    const Edits = async (id) => {
        const { data } = await axiosInstance.get(`/party/${id}`);
        console.log("editData", data);
        setCheck(data);
        setShow(true)
    };
    const columns = useMemo(
        () => [
            {
                accessorKey: "ProductsName", //simple recommended way to define a column
                header: "Products Name",
                muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
                Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
            },
            {
                accessorKey: "ProductsPrice", //simple recommended way to define a column
                header: "Products Price",
                muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
                Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
            },
            {
                accessorKey: "Productsquantity", //simple recommended way to define a column
                header: "Products Quantity",
                muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
                Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
            },
            {
                accessorKey: "Categories", //simple recommended way to define a column
                header: "Categories Name",
                muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
                Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
            },
            {
                accessorKey: "Description", //simple recommended way to define a column
                header: "Description",
                muiTableHeadCellProps: { sx: { color: "red" } }, //custom props
                Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
            },
        ],
        []
    );
    return (
        <main className='main-container'>
              <Heading
                    heading={"Products"}
                    navigateTo={"/products"}
                    BreadcrumbMain={"Products"}
                />
            <div className="shadow-sm p-sm-4 extrapd"
                style={{
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    overflow: "hidden",
                }}>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12"><br />
                        <div className="text_react">
                            <h3>Products</h3>
                        </div>

                    </div>
                    <div className="col-6"></div>
                    <div className="col-lg-2 col-md-6 col-sm-12">  <br />
                        <button type="button" style={{
                            backgroundColor: '#4b97ca',
                            border: 'none',
                            color: 'white',
                            padding: '6.5px',
                            textalign: 'c',
                            textdecoration: 'none',
                            display: 'inline-block',
                            fontsize: '16px',
                            borderRadius: "7px",
                            width: "100%"
                        }} onClick={() => navigate("/add-product")}>Add Products</button>
                    </div>
                </div>
              
                    <MaterialReactTable columns={columns} data={data} enableRowActions={true}
                        renderRowActions={({ row }) => (
                            <Box sx={{ display: 'flex', gap: '1rem' }}>
                                <Tooltip arrow placement="left" title="Edit">
                                    <IconButton color="success" onClick={() => Edits(row.original._id)} >
                                        <Edit />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip arrow placement="right" title="Delete">
                                    <IconButton color="error" onClick={() => Deletes(row.original._id)}>
                                        <Delete />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        )} />
            </div>
        
        </main>
    )
}


export default React.memo(Products) 