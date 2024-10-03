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
          // "https://zjusyqpxuc.execute-api.us-east-2.amazonaws.com/dev/getAircraft",
          "http://localhost:3000/planes",
          {
            headers: {
              // Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
              "Conent-Type": "application/json",
            },
          }
        );
        setData(response.data);
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
