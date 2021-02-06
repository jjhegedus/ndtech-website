docker run --rm `
-e API_BASE_URL="localhost:5000" `
-p 3000:3000 `
--rm --network host 22ndtech/ndtech-website:0.0.1