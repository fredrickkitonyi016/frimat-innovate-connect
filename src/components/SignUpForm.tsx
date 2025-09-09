import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { UserPlus, Upload, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SignUpForm = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    alternatePhone: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    
    // Address Information
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    permanentAddress: '',
    
    // Professional Information
    occupation: '',
    companyName: '',
    workAddress: '',
    workPhone: '',
    annualIncome: '',
    yearsOfExperience: '',
    industry: '',
    jobTitle: '',
    
    // Educational Background
    highestEducation: '',
    university: '',
    graduationYear: '',
    fieldOfStudy: '',
    certifications: '',
    
    // Identity Verification
    idType: '',
    idNumber: '',
    socialSecurityNumber: '',
    passport: '',
    
    // Security & Authentication
    password: '',
    confirmPassword: '',
    securityQuestion1: '',
    securityAnswer1: '',
    securityQuestion2: '',
    securityAnswer2: '',
    securityQuestion3: '',
    securityAnswer3: '',
    
    // Emergency Contact
    emergencyContactName: '',
    emergencyContactRelation: '',
    emergencyContactPhone: '',
    emergencyContactEmail: '',
    
    // Additional Information
    howDidYouHear: '',
    referralCode: '',
    motivationLetter: '',
    
    // Agreements
    termsAccepted: false,
    privacyAccepted: false,
    marketingConsent: false,
    backgroundCheckConsent: false,
    creditCheckConsent: false,
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phoneNumber && formData.dateOfBirth && formData.gender && formData.nationality;
      case 2:
        return formData.streetAddress && formData.city && formData.state && formData.zipCode && formData.country && formData.permanentAddress;
      case 3:
        return formData.occupation && formData.companyName && formData.workAddress && formData.workPhone && formData.annualIncome && formData.yearsOfExperience && formData.industry && formData.jobTitle;
      case 4:
        return formData.highestEducation && formData.university && formData.graduationYear && formData.fieldOfStudy && formData.certifications;
      case 5:
        return formData.idType && formData.idNumber && formData.socialSecurityNumber && formData.passport;
      case 6:
        return formData.password && formData.confirmPassword && formData.password === formData.confirmPassword && formData.securityQuestion1 && formData.securityAnswer1 && formData.securityQuestion2 && formData.securityAnswer2 && formData.securityQuestion3 && formData.securityAnswer3;
      case 7:
        return formData.emergencyContactName && formData.emergencyContactRelation && formData.emergencyContactPhone && formData.emergencyContactEmail;
      case 8:
        return formData.howDidYouHear && formData.motivationLetter.length >= 500;
      case 9:
        return formData.termsAccepted && formData.privacyAccepted && formData.backgroundCheckConsent && formData.creditCheckConsent;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    } else {
      toast({
        title: "Incomplete Information",
        description: "Please fill in all required fields before proceeding.",
        variant: "destructive"
      });
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    if (validateStep(9)) {
      toast({
        title: "Application Submitted",
        description: "Your comprehensive application has been submitted for review. We will contact you within 7-10 business days.",
      });
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-primary mb-2">Personal Information</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-primary font-semibold">First Name *</Label>
                <Input 
                  id="firstName" 
                  value={formData.firstName} 
                  onChange={(e) => handleInputChange('firstName', e.target.value)} 
                  className="h-12 border-2 border-border/50 rounded-xl bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 hover:border-accent/30"
                  placeholder="Enter your first name"
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="middleName" className="text-primary font-semibold">Middle Name</Label>
                <Input 
                  id="middleName" 
                  value={formData.middleName} 
                  onChange={(e) => handleInputChange('middleName', e.target.value)} 
                  className="h-12 border-2 border-border/50 rounded-xl bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 hover:border-accent/30"
                  placeholder="Enter your middle name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-primary font-semibold">Last Name *</Label>
                <Input 
                  id="lastName" 
                  value={formData.lastName} 
                  onChange={(e) => handleInputChange('lastName', e.target.value)} 
                  className="h-12 border-2 border-border/50 rounded-xl bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 hover:border-accent/30"
                  placeholder="Enter your last name"
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-primary font-semibold">Email Address *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={(e) => handleInputChange('email', e.target.value)} 
                  className="h-12 border-2 border-border/50 rounded-xl bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 hover:border-accent/30"
                  placeholder="your.email@example.com"
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-primary font-semibold">Phone Number *</Label>
                <Input 
                  id="phoneNumber" 
                  value={formData.phoneNumber} 
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)} 
                  className="h-12 border-2 border-border/50 rounded-xl bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 hover:border-accent/30"
                  placeholder="+1 (555) 123-4567"
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="alternatePhone" className="text-primary font-semibold">Alternate Phone</Label>
                <Input 
                  id="alternatePhone" 
                  value={formData.alternatePhone} 
                  onChange={(e) => handleInputChange('alternatePhone', e.target.value)} 
                  className="h-12 border-2 border-border/50 rounded-xl bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 hover:border-accent/30"
                  placeholder="Alternate phone number"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth" className="text-primary font-semibold">Date of Birth *</Label>
                <Input 
                  id="dateOfBirth" 
                  type="date" 
                  value={formData.dateOfBirth} 
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)} 
                  className="h-12 border-2 border-border/50 rounded-xl bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 hover:border-accent/30"
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender" className="text-primary font-semibold">Gender *</Label>
                <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                  <SelectTrigger className="h-12 border-2 border-border/50 rounded-xl bg-background backdrop-blur-sm focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 hover:border-accent/30">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-2 border-border/50 rounded-xl shadow-lg z-50">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="nationality" className="text-primary font-semibold">Nationality *</Label>
                <Input 
                  id="nationality" 
                  value={formData.nationality} 
                  onChange={(e) => handleInputChange('nationality', e.target.value)} 
                  className="h-12 border-2 border-border/50 rounded-xl bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 hover:border-accent/30"
                  placeholder="Enter your nationality"
                  required 
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Address Information</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="streetAddress">Street Address *</Label>
                <Input id="streetAddress" value={formData.streetAddress} onChange={(e) => handleInputChange('streetAddress', e.target.value)} required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" value={formData.city} onChange={(e) => handleInputChange('city', e.target.value)} required />
                </div>
                <div>
                  <Label htmlFor="state">State/Province *</Label>
                  <Input id="state" value={formData.state} onChange={(e) => handleInputChange('state', e.target.value)} required />
                </div>
                <div>
                  <Label htmlFor="zipCode">ZIP/Postal Code *</Label>
                  <Input id="zipCode" value={formData.zipCode} onChange={(e) => handleInputChange('zipCode', e.target.value)} required />
                </div>
              </div>
              <div>
                <Label htmlFor="country">Country *</Label>
                <Input id="country" value={formData.country} onChange={(e) => handleInputChange('country', e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="permanentAddress">Permanent Address (if different) *</Label>
                <Textarea id="permanentAddress" value={formData.permanentAddress} onChange={(e) => handleInputChange('permanentAddress', e.target.value)} required />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Professional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="occupation">Current Occupation *</Label>
                <Input id="occupation" value={formData.occupation} onChange={(e) => handleInputChange('occupation', e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="companyName">Company Name *</Label>
                <Input id="companyName" value={formData.companyName} onChange={(e) => handleInputChange('companyName', e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="jobTitle">Job Title *</Label>
                <Input id="jobTitle" value={formData.jobTitle} onChange={(e) => handleInputChange('jobTitle', e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="industry">Industry *</Label>
                <Input id="industry" value={formData.industry} onChange={(e) => handleInputChange('industry', e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="workAddress">Work Address *</Label>
                <Input id="workAddress" value={formData.workAddress} onChange={(e) => handleInputChange('workAddress', e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="workPhone">Work Phone *</Label>
                <Input id="workPhone" value={formData.workPhone} onChange={(e) => handleInputChange('workPhone', e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="annualIncome">Annual Income *</Label>
                <Select value={formData.annualIncome} onValueChange={(value) => handleInputChange('annualIncome', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select income range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-25k">Under $25,000</SelectItem>
                    <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                    <SelectItem value="50k-75k">$50,000 - $75,000</SelectItem>
                    <SelectItem value="75k-100k">$75,000 - $100,000</SelectItem>
                    <SelectItem value="100k-150k">$100,000 - $150,000</SelectItem>
                    <SelectItem value="150k-plus">$150,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="yearsOfExperience">Years of Experience *</Label>
                <Input id="yearsOfExperience" type="number" value={formData.yearsOfExperience} onChange={(e) => handleInputChange('yearsOfExperience', e.target.value)} required />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Educational Background</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="highestEducation">Highest Education Level *</Label>
                <Select value={formData.highestEducation} onValueChange={(value) => handleInputChange('highestEducation', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-school">High School</SelectItem>
                    <SelectItem value="associate">Associate Degree</SelectItem>
                    <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                    <SelectItem value="master">Master's Degree</SelectItem>
                    <SelectItem value="doctorate">Doctorate</SelectItem>
                    <SelectItem value="professional">Professional Degree</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="university">University/Institution *</Label>
                <Input id="university" value={formData.university} onChange={(e) => handleInputChange('university', e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="graduationYear">Graduation Year *</Label>
                <Input id="graduationYear" type="number" min="1950" max="2030" value={formData.graduationYear} onChange={(e) => handleInputChange('graduationYear', e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="fieldOfStudy">Field of Study *</Label>
                <Input id="fieldOfStudy" value={formData.fieldOfStudy} onChange={(e) => handleInputChange('fieldOfStudy', e.target.value)} required />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="certifications">Professional Certifications *</Label>
                <Textarea id="certifications" placeholder="List all professional certifications, licenses, and relevant qualifications" value={formData.certifications} onChange={(e) => handleInputChange('certifications', e.target.value)} required />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Identity Verification</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="idType">ID Type *</Label>
                <Select value={formData.idType} onValueChange={(value) => handleInputChange('idType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select ID type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="drivers-license">Driver's License</SelectItem>
                    <SelectItem value="state-id">State ID</SelectItem>
                    <SelectItem value="passport">Passport</SelectItem>
                    <SelectItem value="military-id">Military ID</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="idNumber">ID Number *</Label>
                <Input id="idNumber" value={formData.idNumber} onChange={(e) => handleInputChange('idNumber', e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="socialSecurityNumber">Social Security Number *</Label>
                <Input id="socialSecurityNumber" placeholder="XXX-XX-XXXX" value={formData.socialSecurityNumber} onChange={(e) => handleInputChange('socialSecurityNumber', e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="passport">Passport Number *</Label>
                <Input id="passport" value={formData.passport} onChange={(e) => handleInputChange('passport', e.target.value)} required />
              </div>
            </div>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Document Upload Required:</strong> You will need to upload clear photos of your government-issued ID and proof of address after completing this form.
              </p>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Security & Authentication</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="password">Password *</Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"} 
                    value={formData.password} 
                    onChange={(e) => handleInputChange('password', e.target.value)} 
                    required 
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Must be at least 12 characters with uppercase, lowercase, number, and special character
                </p>
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <div className="relative">
                  <Input 
                    id="confirmPassword" 
                    type={showConfirmPassword ? "text" : "password"} 
                    value={formData.confirmPassword} 
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)} 
                    required 
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4 mt-6">
                <h4 className="font-medium">Security Questions</h4>
                <div>
                  <Label htmlFor="securityQuestion1">Security Question 1 *</Label>
                  <Select value={formData.securityQuestion1} onValueChange={(value) => handleInputChange('securityQuestion1', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a security question" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mother-maiden">What is your mother's maiden name?</SelectItem>
                      <SelectItem value="first-pet">What was the name of your first pet?</SelectItem>
                      <SelectItem value="elementary-school">What elementary school did you attend?</SelectItem>
                      <SelectItem value="childhood-friend">Who was your childhood best friend?</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input 
                    placeholder="Answer" 
                    value={formData.securityAnswer1} 
                    onChange={(e) => handleInputChange('securityAnswer1', e.target.value)} 
                    className="mt-2"
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="securityQuestion2">Security Question 2 *</Label>
                  <Select value={formData.securityQuestion2} onValueChange={(value) => handleInputChange('securityQuestion2', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a security question" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="birth-city">In what city were you born?</SelectItem>
                      <SelectItem value="first-car">What make was your first car?</SelectItem>
                      <SelectItem value="favorite-teacher">Who was your favorite teacher?</SelectItem>
                      <SelectItem value="street-name">What street did you grow up on?</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input 
                    placeholder="Answer" 
                    value={formData.securityAnswer2} 
                    onChange={(e) => handleInputChange('securityAnswer2', e.target.value)} 
                    className="mt-2"
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="securityQuestion3">Security Question 3 *</Label>
                  <Select value={formData.securityQuestion3} onValueChange={(value) => handleInputChange('securityQuestion3', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a security question" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="favorite-book">What is your favorite book?</SelectItem>
                      <SelectItem value="honeymoon-destination">Where did you go on your honeymoon?</SelectItem>
                      <SelectItem value="first-job">What was your first job?</SelectItem>
                      <SelectItem value="childhood-nickname">What was your childhood nickname?</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input 
                    placeholder="Answer" 
                    value={formData.securityAnswer3} 
                    onChange={(e) => handleInputChange('securityAnswer3', e.target.value)} 
                    className="mt-2"
                    required 
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Emergency Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="emergencyContactName">Emergency Contact Name *</Label>
                <Input id="emergencyContactName" value={formData.emergencyContactName} onChange={(e) => handleInputChange('emergencyContactName', e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="emergencyContactRelation">Relationship *</Label>
                <Select value={formData.emergencyContactRelation} onValueChange={(value) => handleInputChange('emergencyContactRelation', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select relationship" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spouse">Spouse</SelectItem>
                    <SelectItem value="parent">Parent</SelectItem>
                    <SelectItem value="sibling">Sibling</SelectItem>
                    <SelectItem value="child">Child</SelectItem>
                    <SelectItem value="friend">Friend</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="emergencyContactPhone">Emergency Contact Phone *</Label>
                <Input id="emergencyContactPhone" value={formData.emergencyContactPhone} onChange={(e) => handleInputChange('emergencyContactPhone', e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="emergencyContactEmail">Emergency Contact Email *</Label>
                <Input id="emergencyContactEmail" type="email" value={formData.emergencyContactEmail} onChange={(e) => handleInputChange('emergencyContactEmail', e.target.value)} required />
              </div>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Additional Information</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="howDidYouHear">How did you hear about us? *</Label>
                <Select value={formData.howDidYouHear} onValueChange={(value) => handleInputChange('howDidYouHear', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="search-engine">Search Engine</SelectItem>
                    <SelectItem value="social-media">Social Media</SelectItem>
                    <SelectItem value="referral">Referral from friend/colleague</SelectItem>
                    <SelectItem value="advertisement">Advertisement</SelectItem>
                    <SelectItem value="news-article">News Article</SelectItem>
                    <SelectItem value="professional-network">Professional Network</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="referralCode">Referral Code (if applicable)</Label>
                <Input id="referralCode" value={formData.referralCode} onChange={(e) => handleInputChange('referralCode', e.target.value)} />
              </div>
              <div>
                <Label htmlFor="motivationLetter">Motivation Letter *</Label>
                <Textarea 
                  id="motivationLetter" 
                  placeholder="Please write a detailed motivation letter explaining why you want to join our platform, your goals, and how you plan to contribute. Minimum 500 characters required."
                  value={formData.motivationLetter} 
                  onChange={(e) => handleInputChange('motivationLetter', e.target.value)} 
                  className="min-h-[150px]"
                  required 
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {formData.motivationLetter.length}/500 characters minimum
                </p>
              </div>
            </div>
          </div>
        );

      case 9:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Terms and Agreements</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="termsAccepted" 
                  checked={formData.termsAccepted} 
                  onCheckedChange={(checked) => handleInputChange('termsAccepted', !!checked)} 
                />
                <Label htmlFor="termsAccepted" className="text-sm leading-relaxed">
                  I agree to the <span className="text-primary underline cursor-pointer">Terms and Conditions</span> and understand that this is a legally binding agreement *
                </Label>
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="privacyAccepted" 
                  checked={formData.privacyAccepted} 
                  onCheckedChange={(checked) => handleInputChange('privacyAccepted', !!checked)} 
                />
                <Label htmlFor="privacyAccepted" className="text-sm leading-relaxed">
                  I agree to the <span className="text-primary underline cursor-pointer">Privacy Policy</span> and consent to the collection and processing of my personal data *
                </Label>
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="backgroundCheckConsent" 
                  checked={formData.backgroundCheckConsent} 
                  onCheckedChange={(checked) => handleInputChange('backgroundCheckConsent', !!checked)} 
                />
                <Label htmlFor="backgroundCheckConsent" className="text-sm leading-relaxed">
                  I consent to a comprehensive background check including criminal history, employment verification, and reference checks *
                </Label>
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="creditCheckConsent" 
                  checked={formData.creditCheckConsent} 
                  onCheckedChange={(checked) => handleInputChange('creditCheckConsent', !!checked)} 
                />
                <Label htmlFor="creditCheckConsent" className="text-sm leading-relaxed">
                  I consent to a credit check and financial verification as part of the application process *
                </Label>
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="marketingConsent" 
                  checked={formData.marketingConsent} 
                  onCheckedChange={(checked) => handleInputChange('marketingConsent', !!checked)} 
                />
                <Label htmlFor="marketingConsent" className="text-sm leading-relaxed">
                  I consent to receiving marketing communications and promotional materials (optional)
                </Label>
              </div>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-medium mb-2">Application Processing Notice</h4>
              <p className="text-sm text-muted-foreground">
                Please note that processing your application may take 7-10 business days. You will receive email updates at each stage of the review process. Additional documentation may be requested during the verification process.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="glassmorphism-button text-white border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 group transform hover:scale-105"
        >
          <UserPlus className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
          Sign Up
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5 border-2 border-border/50 backdrop-blur-sm">
        <DialogHeader className="text-center border-b border-border/20 pb-6">
          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            FRIMAT TECHNOLOGIES
          </DialogTitle>
          <p className="text-muted-foreground mt-2">Comprehensive Application Process</p>
          
          {/* Enhanced Progress Indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    step === stepNumber
                      ? 'bg-accent text-white shadow-lg scale-110 ring-2 ring-accent/30'
                      : step > stepNumber
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-border/30 text-muted-foreground hover:bg-border/50'
                  }`}
                >
                  {stepNumber}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-border/20 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-accent to-primary h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(step / 9) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Step {step} of 9 - {Math.round((step / 9) * 100)}% Complete
            </p>
          </div>
        </DialogHeader>

        <div className="overflow-y-auto max-h-[60vh] px-2">
          <div className="p-6">
            {renderStep()}
          </div>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-border/20 bg-background/50 backdrop-blur-sm">
          <Button 
            variant="outline" 
            onClick={prevStep} 
            disabled={step === 1}
            className="transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
          >
            Previous
          </Button>
          
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Complete all fields marked with *
            </p>
          </div>
          
          {step < 9 ? (
            <Button 
              onClick={nextStep}
              className="btn-primary transform hover:scale-105 transition-all duration-300"
            >
              Next Step
            </Button>
          ) : (
            <Button 
              onClick={handleSubmit}
              className="btn-primary transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-accent to-primary"
            >
              Submit Application
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpForm;