import { useState, useEffect } from "react";
import axios from "axios";

const useAircraftComparison = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAirplaneData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://zvim5i62kh.execute-api.us-east-2.amazonaws.com/dev/getAircraft"
        );
        console.log(response.data)
        setData(response.data);
        console.log(response.data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch plane");
      } finally {
        setLoading(false);
      }
    };
    fetchAirplaneData();
  }, []);

  return { data, loading, error };
};

export default useAircraftComparison;
