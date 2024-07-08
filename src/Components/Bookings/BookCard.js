import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './Book.css';

const FlightBooking = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        origin: '',
        destination: '',
        departureDate: '',
        returnDate: '',
        passengers: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            // Simulating loading delay
            setTimeout(() => {
                setLoading(false);
                history.push("/flightdetails");
            }, 2000); // Example loading time, replace with actual API call
        } catch (error) {
            setLoading(false);
            setError("Failed to search flights, please try again.");
        }
    };

    return (
        <div className="flight-booking">
            <h1>Get Your Tickets!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="origin"
                    value={formData.origin}
                    onChange={handleInputChange}
                    required
                    placeholder="Origin"
                />
                <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    required
                    placeholder="Destination"
                />
                <input
                    type="date"
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleInputChange}
                    required
                    placeholder="Departure Date"
                />
                <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleInputChange}
                    placeholder="Return Date"
                />
                <input
                    type="number"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleInputChange}
                    min="1"
                    required
                    placeholder="Passengers"
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Search'}
                </button>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default FlightBooking;
