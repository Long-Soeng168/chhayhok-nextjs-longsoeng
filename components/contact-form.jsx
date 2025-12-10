"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BASE_API_URL } from "@/env";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    company_name: "",
    telephone: "",
    email: "",
    address: "",
    subject: "",
    inquiry: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{9,15}$/;
    if (!phone) return "Phone number is required.";
    if (!phoneRegex.test(phone)) return "Invalid phone number format.";
    return null;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneError = validatePhoneNumber(formData.telephone);
    if (phoneError) {
      setError(phoneError);
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      console.log(
        `${BASE_API_URL}/sent_message_to_telegram?` +
          `full_name=${formData.full_name}&` +
          `company_name=${formData.company_name}&` +
          `telephone=${formData.telephone}&` +
          `email=${formData.email}&` +
          `address=${formData.address}&` +
          `subject=${formData.subject}&` +
          `inquiry=${formData.inquiry}`
      );

      const res = await fetch(
        `${BASE_API_URL}/sent_message_to_telegram?` +
          `full_name=${formData.full_name}&` +
          `company_name=${formData.company_name}&` +
          `telephone=${formData.telephone}&` +
          `email=${formData.email}&` +
          `address=${formData.address}&` +
          `subject=${formData.subject}&` +
          `inquiry=${formData.inquiry}`
      );

      

      if (!res.ok) {
        throw new Error("Failed to send message.");
      }

      const result = await res.json();
      console.log(result);

      setSuccess(true);
      setFormData({
        full_name: "",
        company_name: "",
        telephone: "",
        email: "",
        address: "",
        subject: "",
        inquiry: "",
      });
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-extrabold mb-6 text-gray-800">
        Send Us a Message
      </h2>

      <Card className="bg-gray-100 shadow-none border-none">
        <CardContent className="p-6 md:p-10">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-x-4 gap-y-4">
              <div className="col-span-2 sm:col-span-1">
                <Label htmlFor="full_name">Full Name</Label>
                <Input
                  id="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Full name"
                  required
                  className="mt-1.5 bg-white h-11 shadow-none"
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <Label htmlFor="company_name">Company Name (optional)</Label>
                <Input
                  id="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  placeholder="Company name"
                  className="mt-1.5 bg-white h-11 shadow-none"
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <Label htmlFor="telephone">Telephone</Label>
                <Input
                  id="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  required
                  className="mt-1.5 bg-white h-11 shadow-none"
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="mt-1.5 bg-white h-11 shadow-none"
                />
              </div>

              <div className="col-span-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  required
                  className="mt-1.5 bg-white h-11 shadow-none"
                />
              </div>

              <div className="col-span-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="mt-1.5 bg-white h-11 shadow-none"
                />
              </div>

              <div className="col-span-2">
                <Label htmlFor="inquiry">Inquiry</Label>
                <Textarea
                  id="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  placeholder="Write your message or inquiry..."
                  required
                  className="mt-1.5 bg-white shadow-none"
                  rows={3}
                />
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm mt-4 font-medium">{error}</p>
            )}
            {success && (
              <p className="text-green-600 text-sm mt-4 font-medium">
                Message sent successfully!
              </p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className={`mt-6 w-full ${
                loading
                  ? "opacity-50 cursor-not-allowed"
                  : "bg-primaryDark hover:bg-primary"
              }`}
              size="lg"
            >
              {loading ? "Sending..." : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
