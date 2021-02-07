docker run --rm `
-e API_BASE_URL="api." `
-p 3000:3000 `
--rm --network host 22ndtech/ndtech-website:0.0.3