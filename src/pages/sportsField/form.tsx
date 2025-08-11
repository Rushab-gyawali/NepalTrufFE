import React, { useState } from 'react';
import Input from './../../components/common/input';
import { SportsField } from './type';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SPORTSFIELDS } from '../../util/constants/routeConstant';

const SportsFieldForm: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<SportsField>({
        name: "",
        field_type: "",
        address: "",
        latitude: "",
        longitude: "",
        hourly_rate: "",
        description: "",
        image_url: "",
        is_active: true,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({
                ...prev,
                [name]: checked,
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        axios.post('/api/sports-fields', formData)
            .then(response => {
                console.log('Success:', response.data);
                navigate(SPORTSFIELDS)
            })
            .catch(error => {
                console.error('Error submitting form:', error);
            }
        );
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-4xl p-4 mx-auto"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                    label="Name"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter field name"
                    required
                />

                {/* <Input
                    label="Owner ID"
                    id="owner_id"
                    name="owner_id"
                    value={formData.owner_id}
                    onChange={handleChange}
                    placeholder="Enter owner ID"
                    required
                /> */}

                <Input
                    label="Field Type"
                    id="field_type"
                    name="field_type"
                    value={formData.field_type}
                    onChange={handleChange}
                    placeholder="Enter field type"
                    required
                />

                <Input
                    label="Address"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter address"
                    required
                />

                <Input
                    label="Latitude"
                    id="latitude"
                    name="latitude"
                    value={formData.latitude}
                    onChange={handleChange}
                    placeholder="Enter latitude"
                    required
                />

                <Input
                    label="Longitude"
                    id="longitude"
                    name="longitude"
                    value={formData.longitude}
                    onChange={handleChange}
                    placeholder="Enter longitude"
                    required
                />

                <Input
                    label="Hourly Rate"
                    id="hourly_rate"
                    name="hourly_rate"
                    value={formData.hourly_rate}
                    onChange={handleChange}
                    placeholder="Enter hourly rate"
                    required
                />

                <Input
                    label="Description"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter description"
                    required
                />

                <Input
                    label="Image URL"
                    id="image_url"
                    name="image_url"
                    value={formData.image_url}
                    onChange={handleChange}
                    placeholder="Enter image URL"
                    required
                />

                <div className="flex items-center space-x-2 mt-2">
                    <label htmlFor="is_active" className="text-sm font-medium text-gray-700">
                        Is Active
                    </label>
                    <input
                        type="checkbox"
                        id="is_active"
                        name="is_active"
                        checked={formData.is_active}
                        onChange={handleChange}
                        className="w-5 h-5"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="w-full md:w-auto px-4 py-2 mt-4 text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-right float-end"
            >
                Submit
            </button>
        </form>
    );
};

export default SportsFieldForm;
