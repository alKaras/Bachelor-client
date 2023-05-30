import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { ServicesInfo, deleteService, getAllServices, isDeleted, isUpdated, updateStatusService } from '../../redux/slices/serviceSlice';
import Moment from 'react-moment';

export default function AdminServicesTable() {
    const dispatch = useDispatch();
    const services = useSelector(ServicesInfo);
    const loaded = useSelector((state) => state.services.isLoading === 'loaded');
    const updated = useSelector(isUpdated);
    const deleted = useSelector(isDeleted);
    const handleUpdate = (servId) => {
        dispatch(updateStatusService(servId))
    }
    const handleDelete = (servId) => {
        dispatch(deleteService(servId));
    }
    useEffect(() => {
        dispatch(getAllServices());

        if (updated || deleted) {
            dispatch(getAllServices());
        }
    }, [dispatch, updated, deleted]);
    return (
        <Table striped bordered hover>
            <thead className='text-center'>
                <tr>
                    <th>№</th>
                    <th>Назва послуги</th>
                    <th>Пошта користувача</th>
                    <th>Статус</th>
                    <th>Дата надіслення</th>
                    <th>Зміна статуса</th>
                    <th>Видалення</th>
                </tr>
            </thead>
            <tbody className='text-center'>
                {
                    loaded ? services.map((obj, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    {obj.type === 'sunpanels' ? <span>Встановлення сонячних панелей</span>
                                        : obj.type === 'powercut' ? <span>Відключення лічнильника</span>
                                            : <span>Підключення та налаштування лічильника</span>}
                                </td>
                                <td>{obj.useremail}</td>
                                <td>{obj.status ? <span>Підтвердженно</span> : <span>В очікувані</span>}</td>
                                <td><Moment format='DD-MM-YYYY' >{obj.sendDate}</Moment></td>
                                {!obj.status ?

                                    <>
                                        <td>
                                            <button onClick={() => handleUpdate(obj._id)} className='btn btn-warning'>
                                                Підтвердити
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(obj._id)} className='btn btn-danger'>Видалити</button>
                                        </td>
                                    </>
                                    :
                                    <>
                                        <td>
                                            <button disabled className='btn btn-warning'>
                                                Підтвердити
                                            </button>
                                        </td>
                                        <td>
                                            <button disabled className='btn btn-danger'>Видалити</button>
                                        </td>
                                    </>
                                }
                            </tr>
                        )
                    }) :
                        <tr>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>
                                <button className='btn btn-warning'>
                                    Підтвердити
                                </button>
                            </td>
                            <td>
                                <button className='btn btn-danger'>Видалити</button>
                            </td>
                        </tr>
                }
            </tbody>
        </Table>
    )
}