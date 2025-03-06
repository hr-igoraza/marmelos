import React , {useEffect}from 'react'


const PrivacyPolicy = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    
  return (
  <>
    <div class="container mx-auto pt-[100px] px-5 mb-10">
        <h1 class="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p class="text-sm text-gray-600 mb-8"><strong>Effective Date:</strong> 01/01/2025</p>
        <p class="mb-6">At Marmelos Homestay, we respect your privacy and are committed to protecting any personal information you provide to us. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our homestay, website, or use our services.</p>

        <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Information We Collect</h2>
        <p class="mb-4">We may collect the following types of information:</p>
        <ul class="list-disc list-inside mb-6">
            <li class="mb-2"><strong>Personal Information:</strong> Name, contact details, email address, and payment details when booking a stay.</li>
            <li class="mb-2"><strong>Booking Information:</strong> Check-in/check-out dates, room preferences, and special requests.</li>
            <li class="mb-2"><strong>Payment Information:</strong> Secure transaction details processed through third-party payment gateways.</li>
            <li class="mb-2"><strong>Website Usage Data:</strong> IP address, cookies, and browsing behavior on our website.</li>
        </ul>

        <h2 class="text-2xl fo
        nt-semibold text-gray-800 mt-8 mb-4">2. How We Use Your Information</h2>
        <p class="mb-4">We use your data to:</p>
        <ul class="list-disc list-inside mb-6">
            <li class="mb-2">Process bookings and provide seamless check-in and check-out experiences.</li>
            <li class="mb-2">Improve our hospitality services based on customer preferences.</li>
            <li class="mb-2">Respond to inquiries, provide customer support, and manage reservations.</li>
            <li class="mb-2">Send promotional offers, updates, and newsletters (only with your consent).</li>
            <li class="mb-2">Maintain security and prevent fraudulent activities.</li>
        </ul>

        <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Data Sharing & Security</h2>
        <p class="mb-4">We do not sell, trade, or rent personal information to third parties.</p>
        <p class="mb-4">We may share data with trusted partners for secure payment processing and booking management.</p>
        <p class="mb-6">Your data is stored securely, and we implement safeguards to prevent unauthorized access.</p>

        <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Cookies & Tracking Technologies</h2>
        <p class="mb-6">Our website uses cookies to enhance user experience, analyze traffic, and personalize content. You can adjust your browser settings to decline cookies, though some site features may not function properly.</p>

        <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Your Rights & Choices</h2>
        <p class="mb-4">You have the right to:</p>
        <ul class="list-disc list-inside mb-6">
            <li class="mb-2">Access, update, or delete your personal information upon request.</li>
            <li class="mb-2">Opt out of marketing communications at any time.</li>
            <li class="mb-2">Request information about how your data is used and stored.</li>
        </ul>

        <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Third-Party Links</h2>
        <p class="mb-6">Our website may contain links to external websites. We are not responsible for their privacy policies, so we encourage you to review their terms before providing any personal data.</p>

        <h2 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Contact Us</h2>
        <div class="bg-gray-100 p-6 rounded-lg mb-6">
            <p class="mb-4">For any questions regarding this Privacy Policy or to exercise your rights, please contact us at:</p>
            <p class="mb-2"><strong>Marmelos Homestay</strong></p>
            <p class="mb-2">Thaikkoottathil</p>
            <p class="mb-2">Chethy P O</p>
            <p class="mb-2">Mararikulam North</p>
            <p class="mb-2">688530</p>
            <p class="mb-2">Alappuzha, Kerala</p>
            <p class="mb-2">Email: <a href="mailto:marmeloshomestay@gmail.com" class="text-blue-600 hover:underline">marmeloshomestay@gmail.com</a>, <a href="mailto:marmelos2025@gmail.com" class="text-blue-600 hover:underline">marmelos2025@gmail.com</a></p>
            <p class="mb-2">Phone: <a href="tel:9288100118" class="text-blue-600 hover:underline">9288100118</a>, <a href="tel:7907109271" class="text-blue-600 hover:underline">7907109271</a></p>
        </div>

        <p class="text-sm text-gray-600 mt-8">We may update this Privacy Policy from time to time. Please review it periodically for any changes.</p>
       <hr  className='my-5'/>
        <p class="text-sm text-gray-600">By using our services, you agree to the terms of this Privacy Policy.</p>
    </div>
    </>
  )
}

export default PrivacyPolicy