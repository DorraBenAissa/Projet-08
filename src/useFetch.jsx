import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

export function useFetch(url) {
	const [fetchedData, setFetchedDat] = useState(null)
	const [isLoading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	useEffect(() => {
		if (!url) return
		setLoading(true)
		async function fetchData() {
			try {
				const response = await fetch(url)
				const data = await response.json()
				setFetchedDat(data)
			} catch (err) {
				console.log(err)
				setError(true)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [url])
	return { isLoading, fetchedData, error }
}

useFetch.propTypes = {
	url : PropTypes.string,
  }
