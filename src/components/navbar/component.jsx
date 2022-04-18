import { Layout, Menu, Button, Modal, Form, Input, Divider } from "antd";
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './styles.module.css';
import { useSelector, useDispatch } from "react-redux";
import { selectAllTabs } from "../../modules/tabs/selectors";
import { tabsSlice } from "../../modules/tabs";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const { Sider } = Layout;

export const Navbar = () => {
    const tabs = useSelector(selectAllTabs);
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [folderNumber, setFolderNumber] = useState(1);
    const dispatch = useDispatch();

    let [tabLabel, setTabLabel] = useState('');
    let [editMode, setEditMode] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    }

    const handleOk = () => {
        setIsModalVisible(false);
        form.resetFields();
    }

    const handleX = () => {
        setIsModalVisible(false);
        form.resetFields();
    }

    const onSubmit = (value) => {
        const newTab = {
            id: Date.now(),
            label: `${value.name}`,
            route: `myfolder${folderNumber}`,
        }
        setFolderNumber((actual) => actual + 1);
        dispatch(tabsSlice.actions.addNewTab(newTab));
        form.resetFields();
    }

    const deleteItem = (tabId) => {
        dispatch(tabsSlice.actions.deleteTab({ tabId }));
    }
    
    const onLabelChange = (e) => {
        setTabLabel(e.currentTarget.value);
    }

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = (tabId) => {
        setEditMode(false);
        if(tabLabel !== '') {
            dispatch(tabsSlice.actions.updateTab({ tabId, tabLabel }));
        }
    }

    return (
        <Sider width={200} theme='light'>
            <Menu theme='light' mode="inline" defaultOpenKeys={['sub1']} style={{height: '100', borderRight: 0}}>
                {
                    tabs.map(({ label, route }, i) => {
                        return <Menu.Item key={i}>
                            <NavLink to={`/mails/${route}`} activeClassName={style.active}>{label}</NavLink>
                        </Menu.Item>
                    })
                }
            </Menu>
            <Button 
                type="primary" 
                style={{ marginLeft: '10px', marginTop: '20px', backgroundColor: '#75cea5', borderColor: '#75cea5' }} 
                onClick={showModal}>
                    Добавить категорию
            </Button>
            <Modal 
                title="Новая категория писем" 
                visible={isModalVisible} 
                onOk={handleOk} 
                okButtonProps={{ style: { backgroundColor: '#75cea5', borderColor: '#75cea5' } }}
                cancelButtonProps={{ style: { display: 'none' } }}
                onCancel={handleX}>
                <Form form={form} onFinish={onSubmit} style={{fontSize: '1.2em'}}>
                    <span>Наименование:</span>
                    <Form.Item name="name" rules={[{ required: true, message: "обязательное поле" },]}>
                        <Input allowClear />
                    </Form.Item>
                    <Button type="primary" htmlType="submit" style={{ backgroundColor: '#75cea5', borderColor: '#75cea5' }}>Добавить</Button>
                    {
                        tabs.length > 5 &&
                        <div>
                            <Divider />
                            <span>Ваши папки:</span>
                            {
                                tabs.map(({id, label}, i) => {
                                    if(i > 4) {
                                        return <div key={id}>
                                            { !editMode && <span>{label}    </span> }
                                            {
                                                editMode &&
                                                <Input style={{ width: "200px", fontSize: "large"}} 
                                                    onBlur={() => deactivateEditMode(id)} 
                                                    autoFocus={true} 
                                                    value={tabLabel} 
                                                    onChange={onLabelChange} />
                                            }
                                            <EditOutlined style={{ color: '#75cea5' }} onClick={activateEditMode} />
                                            <DeleteOutlined style={{ color: '#75cea5' }} onClick={() => deleteItem(id)} />
                                        </div>
                                    }
                                })
                            }
                        </div>
                    }
                </Form>
            </Modal>
        </Sider>
    );
}
