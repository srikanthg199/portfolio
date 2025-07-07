// Utility functions for handling assets in production

export const checkAssetExists = async (path: string): Promise<boolean> => {
	try {
		const response = await fetch(path, { method: 'HEAD' });
		return response.ok;
	} catch {
		return false;
	}
};

export const getAssetUrl = (filename: string): string => {
	// In production, assets should be served from the root
	return `/assets/${filename}`;
};

export const loadImageWithFallback = (imgElement: HTMLImageElement, src: string, fallback: () => void): void => {
	imgElement.onerror = () => {
		console.warn(`Failed to load image: ${src}`);
		fallback();
	};

	imgElement.onload = () => {
		console.log(`Successfully loaded image: ${src}`);
	};

	imgElement.src = src;
};

export const downloadFileWithFallback = async (filename: string, displayName?: string): Promise<void> => {
	const assetUrl = getAssetUrl(filename);

	try {
		// First check if the file exists
		const exists = await checkAssetExists(assetUrl);
		if (!exists) {
			throw new Error(`File not found: ${filename}`);
		}

		// Try to download using blob
		const response = await fetch(assetUrl);
		if (!response.ok) {
			throw new Error(`Failed to fetch: ${response.status}`);
		}

		const blob = await response.blob();
		const url = window.URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = displayName || filename;
		link.target = '_blank';
		link.rel = 'noopener noreferrer';

		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);

		// Clean up
		window.URL.revokeObjectURL(url);
	} catch (error) {
		console.error('Download failed, trying fallback:', error);

		// Fallback: try to open in new tab
		try {
			window.open(assetUrl, '_blank', 'noopener,noreferrer');
		} catch (fallbackError) {
			console.error('Fallback also failed:', fallbackError);
			throw new Error(`Unable to access ${filename}. Please contact for assistance.`);
		}
	}
};
