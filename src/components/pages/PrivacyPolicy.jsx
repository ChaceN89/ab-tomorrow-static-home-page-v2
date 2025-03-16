/**
 * @file PrivacyPolicy.jsx
 * @module PrivacyPolicy
 * @desc Displays the Privacy Policy for Alberta Tomorrow.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 14, 2025
 */

import React from "react";
import PolicyHeader from "../policies/PolicyHeader";
import PolicySection from "../policies/PolicySection";
import PolicySubSection from "../policies/PolicySubSection";
import PolicyText from "../policies/PolicyText";

export default function PrivacyPolicy() {
  return (
    <div className="section">
      <div className="container mx-auto max-w-4xl p-6">
        <PolicyHeader
          title="Privacy Policy"
          intro="Effective date: June 9, 2020. Alberta Tomorrow is committed to maintaining the privacy of individuals and protecting personal information in its custody or control."
        />

        <PolicySection title="Terminology">
          <PolicyText>
            <strong>Personal information:</strong> Information about an identifiable individual. This does not include
            aggregate or anonymous data.
          </PolicyText>
        </PolicySection>

        <PolicySection title="Application">
          <PolicyText>
            This Privacy Policy governs Alberta Tomorrow's website ("Website") and any services provided under the License and Services Agreement.
          </PolicyText>
        </PolicySection>

        <PolicySection title="Cookies">
          <PolicyText>We may use cookies to analyze website traffic and improve user experience. You can disable cookies in your browser settings.</PolicyText>
        </PolicySection>

        <PolicySection title="Security">
          <PolicyText>
            While we take reasonable steps to secure personal data, the internet and email are inherently insecure.
          </PolicyText>
        </PolicySection>


        <PolicySection title="7. Contact Information">
          <PolicyText>
            For inquiries, contact:
            <br />
            <strong>Alberta Tomorrow Executive Director:</strong> Jennifer Janzen
            <br />
            Email: <a href="mailto:info@albertatomorrow.ca" className="text-blue-600 underline">info@albertatomorrow.ca</a>
          </PolicyText>
        </PolicySection>

        <hr className="mt-6" />
      </div>
    </div>
  );
}
